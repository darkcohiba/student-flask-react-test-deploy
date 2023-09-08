from sqlalchemy import ForeignKey
from sqlalchemy.orm import validates, relationship
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy


from config import db

# Models go here!

class Teacher(db.Model, SerializerMixin):
    __tablename__ = 'teachers_table'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    favorite_subject = db.Column(db.String)

    serialize_rules = ('-student_relationship.teacher',)


    student_relationship = relationship("Student", backref="teacher", cascade="all, delete, delete-orphan")


    @validates('favorite_subject')
    def validate_favorite_subject(self, key, subject):
        allowed_subjects = ['React', 'Flask', 'CSS', 'Vanilla JavaScript']
        if subject not in allowed_subjects:
            raise ValueError(f"{subject} is not a valid favorite subject. Choose from {allowed_subjects}")
        return subject

class Student(db.Model, SerializerMixin):
    __tablename__ = 'students_table'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    favorite_subject = db.Column(db.String)

    serialize_rules = ('-teacher.student_relationship',)


    teacher_id = db.Column(db.Integer, ForeignKey('teachers_table.id'))

    


    @validates('favorite_subject')
    def validate_favorite_subject(self, key, subject):
        allowed_subjects = ['React', 'Flask', 'CSS', 'Vanilla JavaScript']
        if subject not in allowed_subjects:
            raise ValueError(f"{subject} is not a valid favorite subject. Choose from {allowed_subjects}")
        return subject

class AlembicVersion(db.Model):
    __tablename__ = 'alembic_version'
    
    version_num = db.Column(db.String, primary_key=True)

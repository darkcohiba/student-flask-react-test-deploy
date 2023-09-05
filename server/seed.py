#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Teacher, Student

def create_teachers():
    teachers = []
    favorite_subject_choice = ['React', 'Flask', 'CSS', 'Vanilla JavaScript']
    for _ in range(15):
        favorite_subject = rc(favorite_subject_choice)
        t = Teacher(
            name=fake.name(),
            favorite_subject=favorite_subject
        )
        teachers.append(t)
    return teachers

def create_students(teachers):
    students = []
    favorite_subject_choice = ['React', 'Flask', 'CSS', 'Vanilla JavaScript']
    for teacher in teachers:
        favorite_subject = rc(favorite_subject_choice)
        s = Student(
            name=fake.name(),
            favorite_subject=favorite_subject,
            teacher_id = teacher.id
        )
        students.append(s)
    return students

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # print(db.Model.metadata.tables.keys())

        # print("Seeding Teachers")
        # teachers = create_teachers()
        # db.session.add_all(teachers)
        # db.session.commit()


        # print("Seeding Students")
        # students = create_teachers()
        # db.session.add_all(students)
        # db.session.commit()

        # delete and create
        db.session.query(Teacher).delete()
        db.session.query(Student).delete()
        db.create_all()

        print("Seeding Teachers")
        teachers = []
        favorite_subject_choice = ['React', 'Flask', 'CSS', 'Vanilla JavaScript']
        for _ in range(15):
            favorite_subject = rc(favorite_subject_choice)
            t = Teacher(
                name=fake.name(),
                favorite_subject=favorite_subject
            )
            teachers.append(t)
        
        db.session.add_all(teachers)
        db.session.commit()

        print("Seeding Students")
        students = []
        for teacher in teachers:
            favorite_subject = rc(favorite_subject_choice)
            s = Student(
                name=fake.name(),
                favorite_subject=favorite_subject,
                teacher_id=teacher.id
            )
            students.append(s)

        db.session.add_all(students)
        db.session.commit()
#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, render_template, make_response
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports
from models import Teacher, Student

# Views go here!
@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")


class Teachers(Resource):
    def get(self):
        teachers = [t.to_dict() for t in Teacher.query.all()]
        return make_response(teachers, 200)


class Students(Resource):
    def get(self):
        students = [s.to_dict() for s in Student.query.all()]
        return make_response(students, 200)


# resources

api.add_resource(Students, '/students')
api.add_resource(Teachers, '/teachers')

if __name__ == '__main__':
    app.run(port=5555, debug=True)


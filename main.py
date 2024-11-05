from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_bootstrap import Bootstrap5
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, URLField, EmailField, PasswordField, TextAreaField
from wtforms.validators import DataRequired, URL, Email, ValidationError
from flask_ckeditor import CKEditor, CKEditorField
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin, login_user, LoginManager, login_required, current_user, logout_user

app = Flask(__name__)
bootstrap = Bootstrap5(app)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/manufacturing")
def manufacturing():
    return render_template("manufacturing.html")


@app.route("/equipments")
def equipments():
    return render_template("equipments.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


# ROUTES TO MANUFACTURED PRODUCTS AT MADAD LTD
@app.route("/manufacturing/lpg-vaporizer-kev-series")
def lpg_vaporizer1():
    return render_template("lpg-vaporizer-kev-series.html")


if __name__ == "__main__":
    app.run(debug=True, port=5001)

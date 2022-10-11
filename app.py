from atexit import register
from contextlib import nullcontext
from distutils.log import error
import os
from cs50 import SQL
from flask import Flask, flash, jsonify, redirect, render_template, request, session, url_for
from flask_session import Session
from tempfile import mkdtemp
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash
from werkzeug.utils import secure_filename
from passlib.apps import custom_app_context as pwd_context
from tempfile import gettempdir
from datetime import datetime
import random

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

UPLOAD_FOLDER = os.path.join(basedir, 'static/uploads')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

app.config["SESSION_FILE_DIR"] = gettempdir()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['ALLOWED_EXTENSIONS'] = ALLOWED_EXTENSIONS

Session(app)

db = SQL("sqlite:///database.db")

@app.route("/")
def home():
    header_text = "ยินดีต้อนรับสู่นอนไม่หลับ"
    return render_template("site/index.html", header_text = header_text)
import os
import dj_database_url

from .base import *

DEBUG = False

ADMINS = (('Admin', os.environ['ADMIN_EMAIL']),)

DATABASES['default'] = dj_database_url.config(conn_max_age=500)
SECRET_KEY = os.environ['SECRET_KEY']

ALLOWED_HOSTS = ['*']

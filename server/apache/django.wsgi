import os, sys
sys.path.append('/Users/ahu/Projects/git')
sys.path.append('/Users/ahu/Projects/git/server')

os.environ['DJANGO_SETTINGS_MODULE'] = 'server.settings'

import django.core.handlers.wsgi

application = django.core.handlers.wsgi.WSGIHandler()

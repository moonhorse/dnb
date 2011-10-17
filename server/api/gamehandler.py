from piston.handler import BaseHandler
from piston.utils import rc
from pymongo import Connection

class GameHandler(BaseHandler):
    allowed_methods = ('GET', 'POST')

    def __init__(self):
        self.games = Connection().dnb.games;

    def read(self, request, id):
        return list(self.games.find())

    def create(self, request, id):
        if (request.data):
            self.games.insert(request.data)
        return rc.CREATED 

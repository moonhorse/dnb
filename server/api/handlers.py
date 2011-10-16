from piston.handler import BaseHandler
from pymongo import Connection

class DnbHandler( BaseHandler ):
    def read( self, request, expression ):
        connection = Connection()
        return list(connection.dnb.games.find())

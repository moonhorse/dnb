from django.conf.urls.defaults import *
from piston.resource import Resource
from api.gamehandler import GameHandler

class CsrfExemptResource(Resource):
    def __init__(self, handler, authentication = None):
        super(CsrfExemptResource, self).__init__(handler, authentication)
        self.csrf_exempt = getattr(self.handler, 'csrf_exempt', True)

game_resource = CsrfExemptResource(GameHandler)

urlpatterns = patterns('',
    url( r'^game/(?P<id>.*)$', game_resource)
)

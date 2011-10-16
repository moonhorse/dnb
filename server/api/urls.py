from django.conf.urls.defaults import *
from piston.resource import Resource
from api.handlers import DnbHandler

class CsrfExemptResource( Resource ):
    def __init__( self, handler, authentication = None ):
        super( CsrfExemptResource, self ).__init__( handler, authentication )
        self.csrf_exempt = getattr( self.handler, 'csrf_exempt', True )

dnb_resource = CsrfExemptResource( DnbHandler )

urlpatterns = patterns( '',
    url( r'^dnb/(?P<expression>.*)$', dnb_resource )
)

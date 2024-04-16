import time
from flask import Flask
from flask import Response
from flask import request
from simple_websocket import Server, ConnectionClosed


app = Flask(__name__)


@app.route('/')
def index():
	return '<html><head></head><img src="/video_feed" /></body></html>'

@app.route('/echo', websocket=True)
def echo():
    ws = Server.accept(request.environ)
    try:
        while True:
            event = generator()
            if event is None:
                break
            ws.send(generator())
    except ConnectionClosed:
        pass
    return ''

def generator():
        options = self.options
        for event in processor:
            position = event.position
            args = {
                'x': position[0],
                'y': position[1],
            }
            
            return args

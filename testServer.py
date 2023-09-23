#!usr/bin/env python
from flask import Flask, request, make_response, jsonify



app = Flask(__name__)





@app.route('/', methods=['GET'])
def index():
	with open('./test.html', 'r') as file:
		index = file.read()
		response = make_response(index, 200)

		return response



@app.route('/main.js', methods=['GET'])
def sendJavaScript():
	with open('./main.js', 'r') as file:
		code = file.read()
		response = make_response(code, 200)

		return response



@app.route('/addressBarRickRoll.js', methods=['GET'])
def sendPayload():
	with open('./addressBarRickRoll.js', 'r') as file:
		code = file.read()
		response = make_response(code, 200)

		return response



if __name__ == '__main__':
	app.run(debug=False, host='0.0.0.0', port=8443, ssl_context='adhoc')



from flask import Flask, jsonify
from flask_socketio import SocketIO
from algorithms import SortingAlgorithms

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('sort')
def handle_sorting_event(json):
    numbers = json['numbers']
    for sorted_array in SortingAlgorithms.bubble_sort(numbers):
        socketio.emit('sorted_array', sorted_array)

if __name__ == '__main__':
    socketio.run(app)

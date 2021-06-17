"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (io, socket) => {
    socket.on('test', () => {
        console.log('socket test structure');
    });
};

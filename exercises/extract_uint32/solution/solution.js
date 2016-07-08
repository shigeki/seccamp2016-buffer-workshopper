var buf = new Buffer("expand 32-byte k");
console.log(buf.readUInt32LE(0) ^ buf.readUInt32LE(4) ^ buf.readUInt32LE(8) ^ buf.readUInt32LE(12));

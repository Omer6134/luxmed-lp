import os, http.server, socketserver

# Sandbox'ta başlangıç cwd'si erişilemez olabiliyor; önce geçerli mutlak yola geç.
ROOT = "/Users/omermacbook/Desktop/Yabancı-landingler/luxmed-lp/protez-bacak-en"
os.chdir(ROOT)

PORT = 5173
Handler = http.server.SimpleHTTPRequestHandler
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print("serving %s on %d" % (ROOT, PORT))
    httpd.serve_forever()

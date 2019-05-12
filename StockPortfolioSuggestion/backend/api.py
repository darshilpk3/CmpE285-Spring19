from flask import Flask, request, redirect, url_for, jsonify, send_file
import requests
import json
import random

import sys
reload(sys)
sys.setdefaultencoding('utf8')

app = Flask(__name__, static_url_path='/static')


@app.route('/')
def hello():
    return "Welcome to Stock Portfolio Suggestion Engine"

stock_options = {
        'ethical': ['AAPL', 'ADBE', 'NSRGY', 'GILD', 'GOOGL'],
        'growth': ['BIIB', 'AKRX', 'IPGP', 'PSXP', 'NFLX'],
        'index': ['VTI', 'IXUS', 'ILTB', 'VIS', 'KRE', 'VEU'],
        'quality': ['QUAL', 'SPHQ', 'DGRW', 'QDF'],
        'value': ['AAON', 'CTB', 'JNJ', 'GRUB', 'TTGT']
}


@app.route('/suggest',methods=['POST'])
def suggest_stocks():
    req_data = request.get_json()
    strategy_1 = req_data['strategy_1']
    resp_obj = {}
    stock_info = []

    options = []
    while len(options) < 3:
        temp = random.randint(1,6)
        if temp not in options:
            options.append(temp)


    for option in options:
        stock_list1 = stock_options[strategy_1]
            
        try:
            resp = requests.get('https://api.iextrading.com/1.0/stock/'+stock_list1[option]+'/quote')
            if resp.status_code > 400:
                print "Invalid Request or Invalid Stock Symbol"
            if resp.status_code == 200:
                r = resp.json()
                print r['companyName']
                print r['close'], " " , r['change'] , " (",float(r['changePercent'])*100,"%)"
            print "**************END****************"
        except requests.ConnectionError:
            print("failed to connect")

    return jsonify(options)

if __name__ == '__main__':
    app.run()
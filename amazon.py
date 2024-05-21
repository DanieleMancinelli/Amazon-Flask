'''
Caricare in un dataset un elenco di prodotti con foto e visualizzare le foto dei prodotti in due colonne, l’utente clicca su un prodotto e ottiene le info.
Realizzare tutto in una single page application.
'''
from flask import Flask, render_template, request, jsonify
import pandas as pd

app = Flask(__name__)

df = pd.read_csv('/workspace/Amazon-Flask/data/prodotti.csv')

@app.route('/')
def homepage():
    return render_template('amazon.html', prodotti=df.to_dict('records'))

@app.route('/elenco', methods=['POST'])
def elenco():
    if request.method == 'POST':
        json_data = request.get_json()
        NomeProdotto = json_data.get('NomeProdotto')
        data = df[df['Nome'] == NomeProdotto]
        data = data.to_dict(orient = 'records')
        return jsonify(data), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3245, debug=True)
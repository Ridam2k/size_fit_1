import numpy as np
from flask import Flask, request, jsonify, render_template, redirect
import pickle
from predict import main as get_output
import csv

app = Flask(__name__)
# model = pickle.load(open('model.pkl', 'rb'))
# model2 = pickle.load(open('model_2.pkl', 'rb'))


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/virtual')
def virtual():
    return redirect("http://localhost:3000/")


@app.route('/products')
def inner():
    return render_template('inner-page.html')

# @app.get('/products', (req,res)=>{
#     res.render('inner-page.html');
# });


# @app.route('/size')
# def size():
#     render_template('index.html')


@app.route('/predict', methods=['GET', 'POST'])
def predict():
    render_template('index.html')
    # int_features = [int(x) for x in request.form.values()]
    # final_features = [np.array(int_features)]
    # prediction = model.predict(final_features)

    # output = round(prediction[0], 2)
    req = request.form
    print(req, type(req))
    x = req
    try:
        data = []  # list of data to be written
        # for v in x.items():
        f = {}  # dictionary to which all data gather for each iteration is held
        f['fit'] = x['fit']  # get open
        f['body_type'] = x['body_type']  # get high
        f['category'] = x['category']  # get low
        f['weight'] = x['weight']  # get low
        f['rating'] = x['rating']  # get low
        f['height'] = x['height']  # get low
        f['age'] = x['age']  # get low
        f['bust_size'] = x['bust_size']  # get low
        data.append(f)  # append dictionary f to data list
        header = ['fit', 'body_type', 'category', 'weight', 'rating',
                  'height', 'age', 'bust_size']  # set CSV column headers
        # open the csv file in write mode
        file = open('data.csv', 'w', newline='')
        with file:
            # identifying header
            writer = csv.DictWriter(file, fieldnames=header)
            # write data row-wise into the csv file
            writer.writeheader()
            for row in data:
                writer.writerow(row)
    except:
        print("I/O error")
    prediction = get_output()
    output = prediction[0]
    print(output)

    return render_template('index.html', prediction_text='Your size should be {}'.format(output))


# @app.route('/results', methods=['POST'])
# def results():

#     data = request.get_json(force=True)
#     prediction = model.predict([np.array(list(data.values()))])

#     output = prediction[0]
#     return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)
    # app.run(host='0.0.0.0', debug=True)

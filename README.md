

# Team Her-ricanes: SizeFit_1

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

This is the first and the main component of our project. The second component can be found here - [**SizeFit_2**](https://github.com/Ridam2k/size_fit_2.git)

Before going further please see the demo - ****Insert Video****
The detailed explanation regarding tech stack and training can be found at : ***PPT LINK***


# Components
   
   Our solution for MyntraHackerramp: WeForShe for the theme Size and Fit consists of the following components:  
-   Size Recommendation- An ML-based component that suggests the most appropriate size for a particular product by factoring in your body measurements such as height, bust size, body type,etc. 
-   Nearest Size - Based on the measurements of clothes you already own and fit you well, this component employs a simple algorithm to recommend the size for the interested product
-   Outfit visualiser - This Unity3D- based component enables you to visualise all your mix-and-match outfit ideas and select the one that suits you best 

All these components are tied together by our interactive website that can be hosted locally on your server, as explained in the following section

# Installation

We have tried to keep the installation process as simple as possible. Please keep note of the following requirements and points:

-   The API for the size recommendation is hosted on a python server; it is therefore necessary to have **Python version >=3.8** installed on the local machine. We highly recommend the use of **Anaconda** for the same.
- Please follow the exact steps.The App is tested and verified only if each step is followed.
-   First time deployment of app might take 1 -2 minutes.

Step 1 - Open Anaconda prompt and clone this Repository.

```sh
$ git clone https://github.com/Ridam2k/size_fit_1.git
$ cd size_fit_1
```

Step 2 - Check/install requirements
```sh
$ pip install pandas numpy flask
$ npm install
```

Step 3- Download the pre-trained ML model from [Google Drive](https://drive.google.com/file/d/1k1smJ4WUg9q1qgzVtB1SDv7PHczVLjAt/view?usp=sharing) and place it in the main folder i.e. Size_fit_1

The directory structure should be as follows:
 .
├── static
│   ├── css
│   └── img
    └── public
├── templates
│   ├── home.html
│   └── index.html
    └── inner-page.html
├── app. py
├── model.pkl
├── predict. py
├── preprocess. py
├── predict .py
├── package-lock.json
├── data.csv
├── testing.csv
├── README.md

Step 4- Run the main server
```sh
$ python app.py
```
Step  5- In a separate terminal, run [**[SizeFit_2](https://github.com/Ridam2k/size_fit_2.git)**] 
- Clone the repository
```sh
$ git clone https://github.com/Ridam2k/size_fit_2.git
$ cd size_fit_2
```
- Install requirements and run
```sh
$ npm install
$ npm start
```
Now just head to : http://127.0.0.1:5000/ and see our solution in action!

# That’s it !

Team Her-ricanes 
NSUT, Delhi

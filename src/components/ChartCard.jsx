import React from 'react';
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label} from 'recharts';

const data = [
  {
    metric: 'injValveOpen',
    at: 1574561322794,
    value: 64.17,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561324094,
    value: 66.55,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561325394,
    value: 65.76,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561326694,
    value: 64.94,
    unit: '%',
  },
  {
    metric: 'injValveOpen',
    at: 1574561327994,
    value: 90.78,
    unit: '%',
  },
  {
    "metric": "injValveOpen",
    "at": 1574649260677,
    "value": 23.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649261978,
    "value": 26.15,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649263279,
    "value": 28.96,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649264579,
    "value": 24.95,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649265881,
    "value": 25.26,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649267181,
    "value": 22.66,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649268489,
    "value": 20.48,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649269793,
    "value": 24.02,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649271097,
    "value": 25.88,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649272401,
    "value": 24.48,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649273705,
    "value": 24.73,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649275009,
    "value": 28.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649276313,
    "value": 25.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649277617,
    "value": 21.95,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649278918,
    "value": 26.3,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649280220,
    "value": 30.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649281521,
    "value": 29.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649282825,
    "value": 25.97,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649284129,
    "value": 30.51,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649285433,
    "value": 29.98,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649286738,
    "value": 27.1,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649288041,
    "value": 24.91,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649289345,
    "value": 23.67,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649290649,
    "value": 28.33,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649291953,
    "value": 24.24,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649293257,
    "value": 24.38,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649294561,
    "value": 20.74,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649295865,
    "value": 25.22,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649297169,
    "value": 30.04,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649298478,
    "value": 35.02,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649299781,
    "value": 30.64,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649301085,
    "value": 29.01,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649302390,
    "value": 28.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649303689,
    "value": 24.33,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649304995,
    "value": 20.79,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649306297,
    "value": 19.66,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649307597,
    "value": 17.87,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649308901,
    "value": 15.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649310205,
    "value": 11.98,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649311509,
    "value": 10.13,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649312813,
    "value": 5.79,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649314117,
    "value": 7.32,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649315420,
    "value": 5.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649316725,
    "value": 1.11,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649318027,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649319329,
    "value": 0.47,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649320633,
    "value": 1.66,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649321937,
    "value": 2.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649323240,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649324541,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649325842,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649327141,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649328466,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649329769,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649331073,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649332377,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649333687,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649334981,
    "value": 4.04,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649336285,
    "value": 8.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649337588,
    "value": 7.8,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649338889,
    "value": 6.23,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649340193,
    "value": 1.58,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649341493,
    "value": 1.01,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649342797,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649344100,
    "value": 4.05,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649345401,
    "value": 2.13,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649346705,
    "value": 0.92,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649348009,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649349313,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649350615,
    "value": 2.56,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649351916,
    "value": 3.74,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649353217,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649354521,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649355824,
    "value": 2.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649357129,
    "value": 4.87,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649358430,
    "value": 5.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649359733,
    "value": 2.92,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649361035,
    "value": 3.36,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649362337,
    "value": 2.47,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649363641,
    "value": 0.4,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649364943,
    "value": 4.1,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649366246,
    "value": 7.07,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649367547,
    "value": 7.04,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649368848,
    "value": 7.11,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649370153,
    "value": 8.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649371457,
    "value": 3.71,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649372759,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649374061,
    "value": 0,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649375364,
    "value": 1.06,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649376665,
    "value": 5.99,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649377969,
    "value": 10.93,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649379273,
    "value": 13.87,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649380577,
    "value": 12,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649381877,
    "value": 16.84,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649383181,
    "value": 14.44,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649384488,
    "value": 11.32,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649385793,
    "value": 12.8,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649387096,
    "value": 17.01,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649388397,
    "value": 14.7,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649389699,
    "value": 11.69,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649391002,
    "value": 8.16,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649392303,
    "value": 10.7,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649393605,
    "value": 15.22,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649394906,
    "value": 16,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649396208,
    "value": 20.77,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649397509,
    "value": 18.65,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649398813,
    "value": 21.54,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649400117,
    "value": 18.41,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649401421,
    "value": 22.6,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649402725,
    "value": 25.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649404025,
    "value": 21.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649405329,
    "value": 23.3,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649406632,
    "value": 24.11,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649407937,
    "value": 24.33,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649409239,
    "value": 22.26,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649410542,
    "value": 24.82,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649411843,
    "value": 22.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649413152,
    "value": 26.07,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649414454,
    "value": 28.85,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649415757,
    "value": 23.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649417061,
    "value": 28.19,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649418368,
    "value": 32.35,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649419669,
    "value": 34.91,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649420971,
    "value": 37.38,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649422272,
    "value": 36.6,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649423574,
    "value": 38.58,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649424874,
    "value": 40.34,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649426177,
    "value": 41.21,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649427481,
    "value": 42.41,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649428785,
    "value": 44.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649430089,
    "value": 49.06,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649431393,
    "value": 50.43,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649432696,
    "value": 47.35,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649433997,
    "value": 49.76,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649435297,
    "value": 47.91,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649436601,
    "value": 44.92,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649437902,
    "value": 41.47,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649439205,
    "value": 45.29,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649440509,
    "value": 41.27,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649441814,
    "value": 39.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649443120,
    "value": 38.69,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649444421,
    "value": 35.21,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649445722,
    "value": 34.25,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649447024,
    "value": 31.57,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649448325,
    "value": 34.75,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649449629,
    "value": 35.45,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649450931,
    "value": 35.44,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649452231,
    "value": 38.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649453533,
    "value": 34.81,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649454837,
    "value": 39.36,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649456138,
    "value": 43.11,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649457439,
    "value": 44.8,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649458741,
    "value": 46.63,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649460050,
    "value": 50.98,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649461353,
    "value": 54.56,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649462658,
    "value": 51.16,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649463963,
    "value": 49.15,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649465265,
    "value": 47.03,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649466567,
    "value": 44.28,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649467869,
    "value": 47.65,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649469179,
    "value": 50.37,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649470481,
    "value": 46.91,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649471782,
    "value": 44.92,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649473086,
    "value": 47.56,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649474390,
    "value": 43.76,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649475691,
    "value": 47.89,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649476993,
    "value": 43.05,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649478296,
    "value": 43.41,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649479597,
    "value": 47.66,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649480901,
    "value": 44.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649482203,
    "value": 40.49,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649483503,
    "value": 39.5,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649484807,
    "value": 40.17,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649486107,
    "value": 38.46,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649487409,
    "value": 35.96,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649488713,
    "value": 40.12,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649490017,
    "value": 43.1,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649491321,
    "value": 43,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649492625,
    "value": 40.23,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649493929,
    "value": 42.62,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649495233,
    "value": 37.84,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649496537,
    "value": 41.04,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649497838,
    "value": 42.51,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649499141,
    "value": 40.22,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649500445,
    "value": 40.86,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649501747,
    "value": 44.16,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649503048,
    "value": 45.02,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649504349,
    "value": 46.82,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649505653,
    "value": 51.58,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649506956,
    "value": 53.76,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649508256,
    "value": 54.54,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649509557,
    "value": 51.02,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649510861,
    "value": 51.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649512165,
    "value": 46.78,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649513473,
    "value": 42.88,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649514776,
    "value": 45.62,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649516076,
    "value": 42.65,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649517377,
    "value": 46.92,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649518678,
    "value": 47.5,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649519979,
    "value": 48.08,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649521281,
    "value": 51.29,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649522585,
    "value": 47.27,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649523900,
    "value": 50.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649525194,
    "value": 54.07,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649526495,
    "value": 56.37,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649527801,
    "value": 58.85,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649529105,
    "value": 54.04,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649530409,
    "value": 58.85,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649531714,
    "value": 58.54,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649533021,
    "value": 55.35,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649534325,
    "value": 51.32,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649535627,
    "value": 55.66,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649536930,
    "value": 57.38,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649538233,
    "value": 60.02,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649539537,
    "value": 61.42,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649540837,
    "value": 64.61,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649542140,
    "value": 64.77,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649543441,
    "value": 67.94,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649544745,
    "value": 66.63,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649546046,
    "value": 61.71,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649547349,
    "value": 62.19,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649548657,
    "value": 66.48,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649549961,
    "value": 66.51,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649551264,
    "value": 63.79,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649552565,
    "value": 68.06,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649553868,
    "value": 66.43,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649555169,
    "value": 64.81,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649556469,
    "value": 65.24,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649557770,
    "value": 67.76,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649559070,
    "value": 63.17,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649560371,
    "value": 63.57,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649561674,
    "value": 65.82,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649562977,
    "value": 64.24,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649564281,
    "value": 60.38,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649565585,
    "value": 62.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649566888,
    "value": 67.59,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649568189,
    "value": 70.13,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649569493,
    "value": 66.7,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649570797,
    "value": 62.33,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649572100,
    "value": 62.39,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649573402,
    "value": 62.57,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649574704,
    "value": 64.52,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649576013,
    "value": 63.12,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649577309,
    "value": 66.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649578613,
    "value": 65,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649579916,
    "value": 65.98,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649581217,
    "value": 67.45,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649582519,
    "value": 71.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649583821,
    "value": 70.09,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649585124,
    "value": 69.74,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649586429,
    "value": 71.19,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649587733,
    "value": 66.57,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649589035,
    "value": 62.13,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649590337,
    "value": 65.43,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649591643,
    "value": 65.46,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649592945,
    "value": 68.72,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649594249,
    "value": 64.12,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649595554,
    "value": 68.9,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649596856,
    "value": 67.33,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649598157,
    "value": 63.68,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649599458,
    "value": 59.75,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649600760,
    "value": 62.27,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649602061,
    "value": 64.29,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649603364,
    "value": 67.98,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649604666,
    "value": 65.76,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649605969,
    "value": 62.18,
    "unit": "%"
  },
  {
    "metric": "injValveOpen",
    "at": 1574649607271,
    "value": 65.47,
    "unit": "%"
  }
];
export default (props) => {
  const {unit} = data[0]
  const dataName = props.daName;

  return (
    <React.Fragment>
          <h2>{dataName}</h2>
          <ResponsiveContainer  width="100%" height={280} >
      <LineChart data={data} margin={{ top: 4, right: 0, left: -25, bottom: 5 }}>
        <XAxis dataKey="at">
          <Label value={dataName} offset={-6} position="insideBottomLeft" />
        </XAxis>
        <YAxis offset={6} label={{ value: `units measured in ${unit}`, angle: -90, position: 'Left' }} />

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#82ca9d" dot={false} />
      </LineChart>
      </ResponsiveContainer>
      </React.Fragment>
  );
};
This is an MRE repo for [slow type checking](https://github.com/snabbdom/snabbdom/issues/1114) in snabbdom 3.6.x

run this to check tsc times in 3.5.1:
```
npm i && npm test
```

then upgrade to snabbdom 3.6.2 (or any version after [#1092](https://github.com/snabbdom/snabbdom/pull/1092)) to package.json

run the commands again and note the time difference. it can get magnified as the VNodeData object becomes more complex

# Test task DICE ROLLS
## Main objective:
Create tests(using REST API by https://www.npmjs.com/package/superagent) for:

GET: https://www.random.org/integers/?num=1&min=1&max=1&col=1&base=10&format=plain&rnd=new

To create test which check the following hypothesis:
"For large number of rolls (number of rolls > 1000)
distribution of dice points strives to uniform distribution."
## Requirements:
* Language: JS
* Tests should check that maximum deviation of dice results
is within 5% First test: for 1 dice Second test:
for 2 dices (total roll points is a sum of 2 dices)
## How to run this test:
Install all packages
```
npm install
```
You can run command with default params (number of rolls = 10, min roll = 1, max roll = 6)
```
npm run test
```
Or you can run command with params e.g count
of dices(DICE_COUNT), min roll(MIN) and max roll(MAX)
* If you want to throw 1 dice: parameters MIN=1,MAX=6. If 2: MIN=2, MAX=12. If 3: MIN=3, MAX 18. etc
```
ROLLS_NUM=5000 MIN=2 MAX=12 npm run test
```
## Results analysis
If maximum deviation of dice results
is within 5% test will return true, if more test will return false
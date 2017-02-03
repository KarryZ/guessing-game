class GuessingGame {
    setRange(min, max) {
        this.minNumber = min+1;
        this.maxNumber = max-1;
    }
    guess() {
        this.currentPosition = Math.round((this.minNumber + this.maxNumber) / 2);
        return this.currentPosition;
        
    }
    lower() {
        this.maxNumber = this.currentPosition - 1;
    }
    greater() {
        this.minNumber = this.currentPosition + 1;
    }
}
module.exports = GuessingGame;
// Note: We're checking for order of sequence, order matters for the match
export function isArrayMatched<T>(arrCheckedAgainst: Array<T>, arr: Array<T>): boolean {
    if (arrCheckedAgainst.length !== arr.length) {
        return false;
    }
    else {
        for (let i = 0; i < arrCheckedAgainst.length; i++) {
            if (arr[i] !== arrCheckedAgainst[i]) return false;
        }
        return true;
    }
}
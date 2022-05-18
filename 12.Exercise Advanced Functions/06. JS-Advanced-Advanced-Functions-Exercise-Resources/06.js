function solution(command) {

    let currentUp = this.upvotes;
    let currentDown = this.downvotes;

    switch (command) {
        case 'upvote':
            return this.upvotes++;
        case 'downvote':
            return this.downvotes++;
        case 'score':
            score();
            break;
    };


    function score() {
        let reportedUpvotes = currentUp;
        let repostedDownvotes = currentDown;

        if ((currentUp + currentDown) > 50) {
            if (currentUp > currentDown) {
                reportedUpvotes += Math.ceil((25 * currentUp) / 100);
                repostedDownvotes += Math.ceil((25 * currentUp) / 100);
            } else {
                reportedUpvotes += Math.ceil((25 * currentDown) / 100);
                repostedDownvotes += Math.ceil((25 * currentDown) / 100);
            }
        };
        let totalVotes = currentUp + currentDown;
        let percPositive = currentUp / totalVotes * 100;

        let scoreStr = '';
        let totalScore = currentUp - currentDown;
        if (totalVotes < 10) {
            scoreStr = 'new';
        } else if (percPositive > 66) {
            scoreStr = 'hot';
        } else if (percPositive >= 50 && totalVotes > 100) {
            scoreStr = 'controversial';
        } else if (percPositive < 50) {
            scoreStr = 'unpopular';
        } else {
            scoreStr = 'new;'
        }
        if (totalVotes > 50) {
            result = [reportedUpvotes, repostedDownvotes, totalScore, scoreStr];
        } else {
            result = [currentUp, currentDown, totalScore, scoreStr];
        }
        return result;
    }
    return score();

}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote'); // (executed 50 times)

}
score = solution.call(post, 'score');
console.log(score);
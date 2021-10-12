function solution(participant, completion) {
	const sortedParticipant = participant.sort();
	const sortedCompletion = completion.sort();

	for (let i = 0; i < sortedParticipant.length; i++) {
		if (sortedParticipant[i] !== sortedCompletion[i]) {
			return (result = sortedParticipant[i]);
		}
	}
	return result;
}
const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];
console.log(solution(participant, completion));

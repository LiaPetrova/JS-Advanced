function solve(obj) {
    if (obj.dizziness) {
        let amountWater = 0.1 * obj.experience * obj.weight;
        obj.levelOfHydrated += amountWater;
        obj.dizziness = false;
    }
    return obj;
}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));
console.log(solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));
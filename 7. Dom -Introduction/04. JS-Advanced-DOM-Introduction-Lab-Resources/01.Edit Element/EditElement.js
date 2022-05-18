function editElement(ref, match, replacer) {
    const content = ref.textContent;
    const matcher = new RegExp(match, 'g');
    const editted = content.replace(matcher, replacer);
    ref.textContent = editted;
}
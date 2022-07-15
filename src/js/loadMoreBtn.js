export class LoadMoreBtn {
    constructor({ rootSelektor, hidden = false }) {
        this.refs = this.getRefs(rootSelektor);
        hidden && this.hide();
    }
    getRefs(rootSelektor) {
        const refs = {};
        refs.button = document.querySelector(rootSelektor);
        refs.label = refs.button.querySelector('.label');
        return refs;
    }
    disabled() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
    }
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load more';
    }
    show() {
        this.refs.button.classList.remove('is-hidden');
    }
    hide() {
        this.refs.button.classList.add('is-hidden');
    }
}

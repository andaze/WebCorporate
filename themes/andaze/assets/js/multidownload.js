import multiDownload from 'multi-download';

export function download(link) {
	document.querySelector('#download-button').addEventListener('click', event => {
		const files = event.target.dataset.files.split(' ');
		multiDownload(files);
		window.open(link, '_blank'); 
	});
}
const selectElement = (selector) => {
	const elemnet = document.querySelector(selector);
	if (elemnet) {
		return elemnet;
	}
	throw new Error(
		`Double check your ${selector} selector and make sure it\`s typed correctly.`
	);
};

const portfolioContainer = selectElement('.portfolio__container');

//add projects to portfolio
Projects.forEach((project) => {
	const artcl = document.createElement('article');
	artcl.className = 'portfolio__item';
	const artcContent = ` <div class="portfolio__card">
                <img src="${project.img}" alt="${project.name}">
                <div class="card__details">
                    <h3>${project.name}</h3>
                    <p>${project.description}</p>
                    <ul class="card__social_icons">
                        <li>
                            <a href="${project.github}" target='_blank'>
                                <i class="bi bi-github"></i>
                            </a>
                        </li>
                       ${
													project.liveDemo
														? ` <li>
                            <a href="${project.liveDemo}" target='_blank'>
                                <i class="bi bi-eye"></i>
                            </a>
                        </li>`
														: ''
												}
                    </ul>
                </div>
            </div>`;

	artcl.innerHTML = artcContent;
	portfolioContainer.appendChild(artcl);
});

//nav select style
$(document).ready(function () {
	$('nav a').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

//mail from form
const form = document.getElementById('my-form');

async function handleSubmit(event) {
	event.preventDefault();
	let status = document.getElementById('my-form-status');
	let data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			if (response.ok) {
				status.innerHTML = 'Thanks for your submission!';
				form.reset();
			} else {
				response.json().then((data) => {
					if (Object.hasOwn(data, 'errors')) {
						status.innerHTML = data['errors']
							.map((error) => error['message'])
							.join(', ');
					} else {
						status.innerHTML = 'Oops! There was a problem submitting your form';
					}
				});
			}
		})
		.catch((error) => {
			status.innerHTML = 'Oops! There was a problem submitting your form';
		});
}
form.addEventListener('submit', handleSubmit);

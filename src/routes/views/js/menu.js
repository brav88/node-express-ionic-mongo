const menuObject = document.querySelector('#nav-menu');

menuArray = [{ 'name': 'Expenses', 'url': './expenses', 'icon': 'home-outline' },
{ 'name': 'Events', 'url': './events', 'icon': 'calendar-outline' },
{ 'name': 'Location', 'url': './location', 'icon': 'location-outline' },
{ 'name': 'Friends', 'url': './friends', 'icon': 'people-outline' }];

menuHtml = `
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>Menu</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-list>
                    ${menuArray.map(item => `
                        <ion-item>
                            <ion-icon color="primary" name="${item.icon}" slot="start"></ion-icon>
                            <ion-router-link color="dark" href="${item.url}">${item.name}</ion-router-link>
                        </ion-item>
                    `).join('\n')}
                </ion-list>    
            </ion-content>`;

menuObject.innerHTML = menuHtml;
fetch(chrome.runtime.getURL('form_data.json'))
    .then(response => response.json())
    .then(loginData => {
        let hostname = window.location.hostname;
        // 

        if (hostname.startsWith('www.')) {
            hostname = hostname.substring(4);
        }
        console.log('Hostname:', hostname);

        if (loginData[hostname]) {
            const username = loginData[hostname].username;
            const password = loginData[hostname].password;

            console.log('Found login data for:', hostname);

            const usernameField = document.querySelector("input[type='text'], input[type='email'], input[name='username'], input[name='user']");
            const passwordField = document.querySelector("input[type='password'], input[name='password']");
            const loginButton = document.querySelector("button[type='submit'], input[type='submit']");

            if (usernameField && passwordField) {
                usernameField.value = username;
                usernameField.dispatchEvent(new Event('input', { bubbles: true }));
                usernameField.dispatchEvent(new Event('change', { bubbles: true }));

                passwordField.value = password;
                passwordField.dispatchEvent(new Event('input', { bubbles: true }));
                passwordField.dispatchEvent(new Event('change', { bubbles: true }));

                console.log('Filled in login form.');

                if (loginButton) {
                    console.log('Clicking login button.');
                    loginButton.click();
                }
            } else {
                console.log('Username or password field not found.');
            }
        } else {
            console.log('No login data found for:', hostname);
        }
    })
    .catch(error => console.error('Error loading login data:', error));

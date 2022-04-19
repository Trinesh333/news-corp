function artical() {
    fetch('https://api.npoint.io/6eaf3864eccf51c1f935').then((res) => {
        res.json().then((response) => {
            if (response.data) {
                let collectionid;
                response.data.forEach(element => {
                    if (element.collectiontype === "landing") {
                        collectionid = element.collectionid;
                    };
                });
                if (collectionid) {
                    fetch('https://api.npoint.io/b4ececc4c6755f99abec').then(res => res.json().then((response) => {
                        let wrapper = document.getElementById('wrapper');
                        wrapper.className = 'wrapper';
                        let leftSection = document.createElement('div');
                        leftSection.className = 'section-left';

                        let rightSection = document.createElement('div');
                        rightSection.className = 'section-right';

                        let firstcontent = document.createElement('h1');
                        firstcontent.className = 'content-1';
                        firstcontent.innerHTML = 'Mario Murder in court';

                        let secontcontent = document.createElement('div');
                        secontcontent.className = 'content-2';

                        leftSection.appendChild(firstcontent);
                        leftSection.appendChild(secontcontent);
                        wrapper.appendChild(leftSection);
                        wrapper.appendChild(rightSection);

                        if (response)
                            response.id.forEach(element => {
                                let artical = document.createElement('div');
                                artical.className = 'artical';
                                secontcontent.appendChild(artical);

                                let imageWrapper = document.createElement('div');
                                let img = document.createElement('img');
                                img.src = element.Imageurl;
                                img.alt = element.Imageurl;
                                imageWrapper.appendChild(img);

                                let title = document.createElement('h2');
                                title.className = 'articalTitle';
                                title.innerHTML = element.Title;

                                let content = document.createElement('div');
                                content.innerHTML = element.Intro;

                                artical.appendChild(imageWrapper);
                                artical.appendChild(title);
                                artical.appendChild(content);

                            });
                    }))
                }
            }
        });
    });
}

artical();
fetch('http://localhost:3000/api/v1/websites')
  .then(response => response.json())
  .then(data => {
    // 渲染 Nav 列表
    const preservedItems = document.querySelectorAll('.preserve-item');
    const websiteList = document.getElementById('websiteGroupListNav');
    websiteList.innerHTML = '';
    const keys = Object.keys(data.data);
    for (const key of keys) {
      const listItem = document.createElement('li');
      listItem.textContent = key;
      // 添加href属性，指向对应的h2标签的id
      listItem.innerHTML = `<a href="#${key}">${key}</a>`;
      websiteList.appendChild(listItem);
    }
    for (const item of preservedItems) {
      websiteList.appendChild(item);
    }

    // 渲染 Main 列表
    const websiteGroupListMain = document.getElementById('websiteGroupListMain');
    websiteGroupListMain.innerHTML = '';
    const websiteData = data.data;
    const websiteGroups = Object.keys(websiteData);

    for (const group of websiteGroups) {
      const groupListItem = document.createElement('li');
      // 为每个h2标签添加一个id属性
      const groupItemName = document.createElement('h2');
      groupItemName.id = group;
      groupItemName.textContent = group;

      const groupList = document.createElement('ul');
      const websites = websiteData[group];

      for (const website of websites) {
        const websiteListItem = document.createElement('li');

        const websiteLink = document.createElement('a');
        const websiteIcon = document.createElement('img');
        const websiteTitle = document.createElement('span');
        websiteIcon.src = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${website.url}&size=128`;
        websiteLink.href = website.url;
        websiteTitle.textContent = website.title;

        websiteLink.appendChild(websiteIcon);
        websiteLink.appendChild(websiteTitle);
        websiteListItem.appendChild(websiteLink);
        groupList.appendChild(websiteListItem);
      }

      groupListItem.appendChild(groupItemName);
      groupListItem.appendChild(groupList);
      websiteGroupListMain.appendChild(groupListItem);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

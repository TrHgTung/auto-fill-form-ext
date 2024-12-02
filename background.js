chrome.runtime.onInstalled.addListener(() => {
    // Tạo context menu gốc
    chrome.contextMenus.create({
        id: "parentFillForm",
        title: "Menu Hỗ trợ điền thông tin Profile",
        contexts: ["editable"] // Chỉ hiện menu khi click chuột phải vào trường input hoặc textarea
    });

    // Đọc dữ liệu từ file JSON để tạo các mục con trong menu
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((data) => {
            // Tạo các mục con trong menu dựa trên nội dung của file JSON

            chrome.contextMenus.create({
                id: "fillForm7",
                parentId: "parentFillForm",
                title: "E-mail",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm8",
                parentId: "parentFillForm",
                title: "Mật khẩu",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm9",
                parentId: "parentFillForm",
                title: "Tên thương hiệu Brand dài",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm10",
                parentId: "parentFillForm",
                title: "Tên thương hiệu Brand ngắn",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm11",
                parentId: "parentFillForm",
                title: "Firstname",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm12",
                parentId: "parentFillForm",
                title: "Lastname",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm13",
                parentId: "parentFillForm",
                title: "Giới thiệu ngắn (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm14",
                parentId: "parentFillForm",
                title: "Giới thiệu dài (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm15",
                parentId: "parentFillForm",
                title: "Giới thiệu ngắn (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm16",
                parentId: "parentFillForm",
                title: "Giới thiệu dài (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm17",
                parentId: "parentFillForm",
                title: "Website / URL",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm18",
                parentId: "parentFillForm",
                title: "Username 1",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm19",
                parentId: "parentFillForm",
                title: "Username 2",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm21",
                parentId: "parentFillForm",
                title: "Ngày sinh",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm22",
                parentId: "parentFillForm",
                title: "Địa chỉ (Có dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm23",
                parentId: "parentFillForm",
                title: "Địa chỉ (Không dấu)",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm24",
                parentId: "parentFillForm",
                title: "Số điện thoại",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm26",
                parentId: "parentFillForm",
                title: "Mã ZIP bưu điện",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm25",
                parentId: "parentFillForm",
                title: "Hashtag",
                contexts: ["editable"]
            });
            chrome.contextMenus.create({
                id: "fillForm27",
                parentId: "parentFillForm",
                title: "Link Map CID",
                contexts: ["editable"]
            });
        })
        .catch((error) => console.error("Error loading form data:", error));
});

// Xử lý sự kiện khi người dùng chọn các mục từ context menu
chrome.contextMenus.onClicked.addListener((info, tab) => {
    fetch(chrome.runtime.getURL('data.json'))
        .then((response) => response.json())
        .then((formData) => {
            let contentToFill = "";

            // Kiểm tra mục nào được chọn và lấy nội dung tương ứng từ file JSON
            if (info.menuItemId === "fillForm7") {
                contentToFill = formData.email;
            }
            else if (info.menuItemId === "fillForm8") {
                contentToFill = formData.password;
            }
            else if (info.menuItemId === "fillForm9") {
                contentToFill = formData.long_brand;
            }
            else if (info.menuItemId === "fillForm10") {
                contentToFill = formData.short_brand;
            }
            else if (info.menuItemId === "fillForm11") {
                contentToFill = formData.firstname;
            }
            else if (info.menuItemId === "fillForm12") {
                contentToFill = formData.lastname;
            }
            else if (info.menuItemId === "fillForm13") {
                contentToFill = formData.gioi_thieu_ngan_CO_DAU;
            }
            else if (info.menuItemId === "fillForm14") {
                contentToFill = formData.gioi_thieu_dai_CO_DAU;
            }
            else if (info.menuItemId === "fillForm15") {
                contentToFill = formData.gioi_thieu_ngan_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm16") {
                contentToFill = formData.gioi_thieu_dai_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm17") {
                contentToFill = formData.website;
            }
            else if (info.menuItemId === "fillForm18") {
                contentToFill = formData.username1;
            }
            else if (info.menuItemId === "fillForm19") {
                contentToFill = formData.username2;
            }

            else if (info.menuItemId === "fillForm21") {
                contentToFill = formData.birthday;
            }
            else if (info.menuItemId === "fillForm22") {
                contentToFill = formData.address_CO_DAU;
            }
            else if (info.menuItemId === "fillForm23") {
                contentToFill = formData.address_KHONG_DAU;
            }
            else if (info.menuItemId === "fillForm24") {
                contentToFill = formData.phone;
            }
            else if (info.menuItemId === "fillForm25") {
                contentToFill = formData.hashtag;
            }
            else if (info.menuItemId === "fillForm26") {
                contentToFill = formData.zip_code_postal_code;
            }
            else if (info.menuItemId === "fillForm27") {
                contentToFill = formData.GoogleMap_link_CID;
            }

            // Điền nội dung vào trường input hoặc textarea hiện đang focus
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: autofillFocusedInput,
                args: [contentToFill]
            });
        })
        .catch((error) => console.error("Co loi xay ra, ma loi:", error));
});

// Hàm điền nội dung vào trường input hoặc textarea
function autofillFocusedInput(content) {
    const focusedElement = document.activeElement;
    if (focusedElement && ((focusedElement.tagName === "INPUT" || focusedElement.tagName === "TEXTAREA" || focusedElement.tagName === "DIV" || focusedElement.tagName === "P"))) {
        focusedElement.value = content || "";
    } else {
        console.log("Truong input nay khong duoc focus");
    }
}

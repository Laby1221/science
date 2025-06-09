// page データ挿入
document.addEventListener("DOMContentLoaded", function () {
    fetch('science.json')
        .then(response => response.json())
        .then(data => {
            const processTab = (tabKey, containerId) => {
                const items = data[tabKey];
                const container = document.getElementById(containerId);

                if (!items || items.length === 0) return;

                items.forEach(item => {
                    let itemDiv = document.createElement("div");
                    itemDiv.classList.add("item");

                    // explain
                    let explainDiv = document.createElement("div");
                    explainDiv.classList.add("explain");
                    explainDiv.textContent = item.explain;

                    // answer
                    let answerDiv = document.createElement("div");
                    answerDiv.classList.add("answer");
                    answerDiv.textContent = item.answer;

                    // ✅ イベント設定
                    explainDiv.addEventListener("click", () => {
                        explainDiv.classList.toggle("is-explain-active");
                        answerDiv.classList.toggle("is-answer-active");
                    });

                    itemDiv.appendChild(explainDiv);
                    itemDiv.appendChild(answerDiv);

                    container.appendChild(itemDiv);
                });
            };

            processTab("tab-1", "tab-1");
            processTab("tab-2", "tab-2");
            processTab("tab-3", "tab-3");
            processTab("tab-4", "tab-4");
            processTab("tab-5", "tab-5");
            processTab("tab-6", "tab-6");
            processTab("tab-7", "tab-7");
            processTab("tab-8", "tab-8");
            processTab("tab-9", "tab-9");
            processTab("tab-10", "tab-10");
        })
        .catch(error => console.error('Error loading JSON:', error));
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".tab-btn").forEach((item, index) => {
        item.addEventListener("click", function () {
            // すべての .btn から is-btn-active クラスを削除
            document.querySelectorAll(".tab-btn").forEach(el => el.classList.remove("is-tab-btn-active"));
            // クリックされた要素に is-btn-active クラスを追加
            this.classList.add("is-tab-btn-active");
            // すべての .map-contents から is-contents-active クラスを削除
            document.querySelectorAll(".tab-page").forEach(el => el.classList.remove("is-tab-page-active"));
            // クリックされた要素の index に対応する .map-contents に is-contents-active クラスを追加
            document.querySelectorAll(".tab-page")[index].classList.add("is-tab-page-active");
        });
    });
});

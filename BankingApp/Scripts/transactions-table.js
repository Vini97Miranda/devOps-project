//jon gouspy 74538
document.addEventListener("DOMContentLoaded", function () {
    var transactionRows = document.querySelectorAll("#transactionTable tr[data-transaction-id]");
    var transactionButton = document.querySelector(".transactionButton");

    transactionButton.addEventListener("click", function (event) {
        if (transactionButton.classList.contains("disabled")) {
            event.preventDefault();
        }
    });

    transactionRows.forEach(function (row) {
        var transactionId = row.getAttribute("data-transaction-id");
        row.addEventListener("click", function () {
            var transactionInfoLinks = document.querySelectorAll(".transactionInfo");

            if (transactionButton && deleteLink) {
                var prevSelectedRow = document.querySelector("#transactionTable tr.selected");

                if (prevSelectedRow) {
                    prevSelectedRow.classList.remove("selected");
                }

                if (transactionId === "1") {
                    transactionButton.classList.add("disabled");
                } else {
                    transactionButton.classList.remove("disabled");
                }

                transactionInfoLinks.forEach(function (link) {
                    link.href = link.href.replace("__id__", transactionId);
                });

                row.classList.add("selected");
            }
        });
    });
});

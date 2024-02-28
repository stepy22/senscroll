    $('#query').keyup(function() {
        var query = $(this).val();
    if (query.length >= 3) {
        $.ajax({
            url: 'https://virion.com.hr/results.php',
            type: 'GET',
            data: {
                query: query
            },
            success: function(response) {
                var data = JSON.parse(response);
                console.log(data);
                displayResult(data);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.error(textStatus, errorThrown);
            }
        });
        }
    });
function displayResult(data) {
	const resultDiv = document.getElementById("result");

	if (resultDiv) {
		resultDiv.innerHTML = "";

		if (data.length === 0) {
			resultDiv.innerText = "There is no data found!";
			return;
		}

		for (let i = 0; i < data.length; i++) {
			const link = document.createElement("a");
			link.href = data[i].url;
			link.text = data[i].sentence;

			resultDiv.appendChild(link);
		}
	}
}

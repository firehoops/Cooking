var $ = function (id) {
			return document.getElementById(id);
		}


	window.onload = function () {
				$("calculate").onclick = calculate;
				$("add").onclick = add;
				$("names").focus();

			}

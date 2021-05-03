let filename = null;

function dispText() {
            var text = "'" +
                document.formname.a001.value + "','" +
                document.formname.a002.value + "','" +
                document.formname.a003.value + "','" +
                document.formname.a004.value + "','" +
                document.formname.a005.value + "'";
            var blob = new Blob([text], { "type": "text/plain" });

            //IEの場合
            if (window.navigator.msSaveBlob) {
                window.navigator.msSaveBlob(blob, filename + ".txt");
                //IE以外の場合
            } else {
                document.getElementById("createFile").href = window.URL.createObjectURL(blob);
            }
        }

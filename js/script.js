let arritems = [];
        var todolist = document.getElementById("demo");
        var task = document.getElementById("task");
        
        function add() {
            arritems.push(task.value);
            task.value = "";
            show();
        }

        function show() {
            todolist.innerHTML = ""
            todolist.innerHTML = "<tr><td>Sr.no</td><td>Task</td><td colspan='2'>Action</td></tr>"
            arritems.forEach(function (n, i) {
                var sr_no = i + 1;
                todolist.innerHTML += "<tr><td>" + sr_no + "</td><td>" + n + "</td><td><button class='btn-info' onclick='edit(" + i + ")'>Edit</button></td>" +
                    "<td><button class='btn-danger' onclick='del(" + i + ")'>Delete</button></td></tr>"
            })
        }

        function del(i) {
            arritems.splice(i, 1);
            show();
        }
        function edit(i) {
            task.value = arritems[i];
            document.getElementById("add_btn").style.display = "none"
            var update = document.getElementById("update_btn");
            update.style.display = "inline";
            const att = document.createAttribute("onClick");
            att.value = "update(" + i + ")";
            update.setAttributeNode(att);
        }
        function update(i) {
            arritems.splice(i, 1, task.value);
            task.value = ""
            document.getElementById("update_btn").style.display = "none"
            document.getElementById("add_btn").style.display = "inline"
            show();
            alert("task upadted")
        }

function addTask() {
      const input = document.getElementById("taskInput");
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");

      const label = document.createElement("label");
      label.className = "task-label";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "task-checkbox";

      const span = document.createElement("span");
      span.textContent = taskText;

      checkbox.addEventListener("change", () => {
        li.classList.toggle("completed", checkbox.checked);
      });

      label.appendChild(checkbox);
      label.appendChild(span);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "✕";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(label);
      li.appendChild(deleteBtn);

      document.getElementById("taskList").appendChild(li);
      input.value = "";
    }

    document.getElementById("taskInput").addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });
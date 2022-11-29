import React, { useState, useEffect } from "react";


//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
	const [newTask, setNewTask] = useState("")
	function addTask(e) {
		if (e.code == "Enter" && newTask != "") {
			setTasks([...tasks, { label: newTask, done: false }])
			setNewTask("")
		}
	}

	


	function removeTask(index) {
		console.log(index)

		var newTasks = [...tasks]
		newTasks.splice(index, 1)
		setTasks(newTasks)
	}

	return (
		<div className="container">
			<h1 className="text-white bg-warning">LISTA DE PENDIENTES</h1>
			<div className="container-fluid d-flex mt-5 justify-content-center">

				<ul className="list-group w-90">
					<li className="bg-warning list-group-item d-flex justify-content-between align-items-center">
						<input
							className="form-control"
							type="text"
							onKeyDown={e => addTask(e)}
							onChange={e => setNewTask(e.target.value)}
							value={newTask}
							name="task" id="task" placeholder="Que tenemos que hacer?" />
					</li>
					{tasks.map((task, index) => (
						<li key={index}
							className=" bg-warning list-group-item d-flex justify-content-between  align-items-center">
							<div className="form-check">
								<input 
								onChange={(() => checkTasks)}
								class="form-check-input" type="checkbox" value= {tasks.done} id="flexCheckDefault" />
								<label class="form-check-label" for="flexCheckDefault">
									{task.done}
								</label>
								{task.label}
							</div>
							<button onClick={() => removeTask(index)} className="badge bg-dark rounded-pill">X</button>

						</li>
					))}
					<li className="list-group-item text-center disabled text-muted d-flex justify-content-center align-items-center">
						<small>
							{tasks.length} items.
						</small>
					</li>
				</ul>

			</div>
		</div>
	);
};

export default Home;
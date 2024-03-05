import React, { useState } from "react"; 
import { 
	View, 
	Text, 
	TextInput, 
	TouchableOpacity, 
	FlatList, 
	StyleSheet, 
} from "react-native"; 

const ThirdComponent = () => { 
	const [task, setTask] = useState({
        data: "",
        completed: false
    });
	const [tasks, setTasks] = useState([]); 
	const [editIndex, setEditIndex] = useState(-1); 

	const handleAddTask = () => { 
		if (task.data) { 
			if (editIndex !== -1) { 
				const updatedTasks = [...tasks]; 
				updatedTasks[editIndex] = task; 
				setTasks(updatedTasks); 
				setEditIndex(-1); 
			} else { 
				setTasks([...tasks, task]); 
			} 
			setTask({data: "", completed: false}); // Reset task after adding
		} 
	}; 

	const handleEditTask = (index) => { 
		const taskToEdit = tasks[index]; 
		setTask(taskToEdit); 
		setEditIndex(index); 
	}; 

	const handleCompleteTask = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index] = { ...updatedTasks[index], completed: !updatedTasks[index].completed };
		setTasks(updatedTasks);
	};

	const handleDeleteTask = (index) => { 
		const updatedTasks = [...tasks]; 
		updatedTasks.splice(index, 1); 
		setTasks(updatedTasks); 
	}; 

	const renderItem = ({ item, index }) => ( 
		<View style={[styles.task, item.completed && {opacity:0.7}]}> 
    <TouchableOpacity onPress={() => handleCompleteTask(index)} >
			<Text style={[styles.itemList, item.completed && {textDecorationLine: 'line-through',opacity:0.1}]}>{item.data}</Text> 
    </TouchableOpacity> 
			<View style={styles.taskButtons}> 

				{
          !item.completed && <TouchableOpacity onPress={() => handleEditTask(index)}> 
					<Text style={styles.editButton}>🖊</Text> 
				</TouchableOpacity>  
        }
        <View style={{marginLeft:5}}></View>
				<TouchableOpacity onPress={() => handleDeleteTask(index)}> 
					<Text style={styles.deleteButton}>❌</Text>
				</TouchableOpacity> 
			</View> 
     
		</View> 
	); 

	return ( 
		<View style={styles.container}> 
			<Text style={styles.heading}>All Tasks</Text> 
      
			<TextInput 
				style={styles.input} 
				placeholder="Enter task"
				value={task.data} 
				onChangeText={(text) => setTask({ ...task, data: text })}
			/> 
			<TouchableOpacity 
				style={styles.addButton} 
				onPress={handleAddTask}> 
				<Text style={styles.addButtonText}> 
					{editIndex !== -1 ? "Update Task" : "Add Task"} 
				</Text> 
			</TouchableOpacity> 
			<FlatList 
				data={tasks} 
				renderItem={renderItem} 
				keyExtractor={(item, index) => index.toString()} 
			/> 
		</View> 
	); 
}; 

const styles = StyleSheet.create({ 
	container: { 
		flex: 1, 
		padding: 40, 
		marginTop: 40, 
		backgroundColor: "#eee" 
	}, 
	heading: { 
		fontSize: 30, 
		fontWeight: "bold", 
		marginBottom: 50, 
		color: "#348feb", 
		textAlign: "center" 
	}, 
	input: { 
		borderWidth: 3, 
		borderColor: "#ccc", 
		padding: 10, 
		marginBottom: 10, 
		borderRadius: 10, 
		fontSize: 18, 
	}, 
	addButton: { 
		backgroundColor: "#348feb", 
		padding: 10, 
		borderRadius: 5, 
		marginBottom: 10, 
	}, 
	addButtonText: { 
		color: "white", 
		fontWeight: "bold", 
		textAlign: "center", 
		fontSize: 18, 
	}, 
	task: { 
		flexDirection: "row", 
		justifyContent: "space-between", 
		alignItems: "center", 
		marginBottom: 15, 
		fontSize: 18, 
		backgroundColor: "white", 
		paddingHorizontal: 10, 
		paddingVertical: 15, 
		borderRadius: 20 ,

    
	}, 
	itemList: { 
		fontSize: 19, 
	}, 
	taskButtons: { 
		flexDirection: "row", 
	}, 
	editButton: { 
		marginRight: 10, 
		color: "green", 
		fontWeight: "bold", 
		fontSize: 15, 
	}, 
	deleteButton: { 
		color: "red", 
		fontWeight: "bold", 
		fontSize: 15, 
	}, 
}); 

export default ThirdComponent;
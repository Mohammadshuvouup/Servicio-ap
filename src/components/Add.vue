<template>
    <!-- <h1> 
        - {{$route.params.anything}}

    </h1> -->
    <div class="w-50 mx-auto py-5">
    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter task" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">ADD</button>
    </div>

     <table class="table table-bordered">
                
                  <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                      <td>{{task.name}}</td>
                      <!-- <td>{{task.name}}</td> -->
                     
                    </tr>
                  
                  </tbody>
          </table>
    </div>
    
</template>
<style>
  
</style>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  
},
data(){
  return {
    task: '',
    editedTask: null,
    tasks: [
      {
        name: 'My store',
        status: 'to-do'
      },
      {
        name: 'My store visit',
        status: 'in-progress'
      }
    ]
  }
  },
 methods:{
    submitTask(){
      if(this.task.length ===0) return;

      if(this.editedTask === null){
      this.tasks.push({
        name: this.task,
        status: 'to-do'
      });
      }else{
        this.tasks[this.editedTask].name = this.task;
        this.editedTask = null;
      }
      this.task = '';
    },
    deleteTrash(index){
      this.tasks.splice(index, 1);
    },
    editTask(index){
      this.task = this.tasks[index].name;
      this.editedTask = index;
    }
  }
};

</script>


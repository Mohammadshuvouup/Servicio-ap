<template>
  <div class="container todos py-5">
    <h2 class="text-center"> My Todo App </h2>
    <div class="d-flex">
      <input v-model="task" type="text" placeholder="Enter task" class="form-control">
      <button @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>
    <!-- .................table.................. -->
              <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">Task</th>
                      <th scope="col">Status</th>
                      <th scope="col" class="text-center">#</th>
                      <th scope="col" class="text-center">#</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(task, index) in tasks" :key="index">
                      <td>{{task.name}}</td>
                      <td>{{task.status}}</td>
                      <td>
                        <div class="text-center" @click="editTask(index)">
                          <span class="fa fa-pen"></span>
                        </div>
                      </td>
                      <td>
                        <div class="text-center" @click="deleteTrash(index)">
                          <span class="fa fa-trash"></span>
                        </div>
                      </td>
                    </tr>
                  
                  </tbody>
          </table>
     
   
  </div>
</template>

  


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


<style scoped>

</style>

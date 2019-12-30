<template>
    <div class="daily-workouts-container">
      <div 
        v-for="(circuit, index) in circuits"
        :key="`circuit-${index}`"
        class="daily-circuit"
    >
        <b-card class="circuit-info">
            <h1>{{ circuit.name }}</h1>
            <p>{{ circuit.desc }}</p>
        </b-card>

        <b-card class="workouts">
            <b-row no-gutters>
                <b-col
                    v-for="(workout, index2) in circuit.workouts"
                    :key="`workout-${index2}`"
                    md="4"
                >
                    <img class="workout-gif" :src="workout.img">
                    
                    <div class="workout-name">
                        <span>{{ index2 + 1 }}</span>
                        <h3>{{ workout.workoutName }}</h3>
                    </div>
                    <p><span class="bolded">{{workout.sets}}</span> sets - <span class="bolded">{{workout.seconds}}</span> seconds - <span class="bolded">{{workout.rest}}s</span> rest</p>
                </b-col>
            </b-row>
        </b-card>
      </div>
    </div>
</template>

<script>
export default {
    name: 'DailyWorkouts',
    data() {
        return {
            circuits: [
                {
                    name: 'Circuit 1',
                    desc: 'For this circuit, perform each exercise in order for the indicated seconds. Allow rest time in between each exercise as indicated (15-20 sec). Repeat the series of exercises until you’ve finished the indicated sets (3). Allow 60-90 seconds between each circuit for this workout day.',
                    workouts: [
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/167-1.gif',
                            workoutName: 'Sprints - Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/05/058.gif',
                            workoutName: 'Dumbell Boxer Punch',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/165-1.gif',
                            workoutName: 'Side Shuffle Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                    ]
                },
                {
                    name: 'Circuit 2',
                    desc: 'For this circuit, perform each exercise in order for the indicated seconds. Allow rest time in between each exercise as indicated (15-20 sec). Repeat the series of exercises until you’ve finished the indicated sets (3). Allow 60-90 seconds between each circuit for this workout day.',
                    workouts: [
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/167-1.gif',
                            workoutName: 'Sprints - Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/05/058.gif',
                            workoutName: 'Dumbell Boxer Punch',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/165-1.gif',
                            workoutName: 'Side Shuffle Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                    ]
                },
                {
                    name: 'Circuit 3',
                    desc: 'For this circuit, perform each exercise in order for the indicated seconds. Allow rest time in between each exercise as indicated (15-20 sec). Repeat the series of exercises until you’ve finished the indicated sets (3). Allow 60-90 seconds between each circuit for this workout day.',
                    workouts: [
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/167-1.gif',
                            workoutName: 'Sprints - Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/05/058.gif',
                            workoutName: 'Dumbell Boxer Punch',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                        {
                            img: 'https://chaneldelisser.com/wp-content/uploads/2019/01/165-1.gif',
                            workoutName: 'Side Shuffle Treadmill',
                            sets: '3',
                            seconds: '45',
                            rest: '15',
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style>
body {
    background: #f5f5f5;
}
.daily-workouts-container {
    margin: 50px;
}

.daily-circuit {
    margin-bottom: 20px;
}

.workouts {
    border-radius: 0;
    text-align: center;
}

.bolded {
    font-weight: 600;
}

.circuit-info {
    border-bottom: 5px solid #A2D618;
    border-radius: 0px;
    margin-bottom: 10px;
}

.workout-gif {
    margin-bottom: 20px;
}

.workout-name {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
}

.workout-name span {
    font-size: 20px;
    padding: 0 10px;
    margin-right: 15px;
    background: #A2D618;
}

.workout-name h3 {
    margin-bottom: 0;
}
</style>
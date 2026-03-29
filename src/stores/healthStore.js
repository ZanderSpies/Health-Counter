/* Spies u25033931*/
import { defineStore } from "pinia";

export const useHealthStore = defineStore("health", {state: () => ({
    health: 0,
    maxHealth: 10
    }),
    actions: {
        increment()
        {
            if(!this.isMax)
            this.health += 1
        },
        decrement()
        {
            if(!this.isDead)
            this.health -= 1
        },
        setMaxHealth(newMaxHealth)
        {
            if(this.canEditMaxHealth)
            this.maxHealth = Number(newMaxHealth)
        },
        resetValues()
        {
            this.health = 0
            this.maxHealth = 10
        }
    },
    getters:
    {
        isDead()
        {
            return this.health === 0;
        },
        isMax()
        {
            return this.health === this.maxHealth;
        },
        canEditMaxHealth()
        {
            return this.health === 0;
        },
        isDefault()
        {
            return (this.maxHealth === 10 && this.health === 0);
        }
    }
})
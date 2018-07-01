Project EquipEngine Site

passphrase: irishjane

Login information to dev site:

User: admin
User: student
User: teacher
Password: 123456


### Rule of thumb for React code standards:
- Avoid creating components in `base_components` dir which is connected to **Redux** or maintaing its own states.
- If the reusable components has its own state or connected to redux, move it to `Scenes/components` .
- Syntax of naming **React components** - `{Block element}{Module name}`. For an instance, **ListTutorial** . List is *BLock element*, Tutorial is *Module element*.
- In naming handler function, name should start in `on`. For an instance, **onClick** .

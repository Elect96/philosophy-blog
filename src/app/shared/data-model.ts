
export class Article {
    static _id: number = 0;
    public id: number;
    constructor(
        public author: string,
        public title: string,
        public date: number,
        public content: string[],
        public user: string = "admin"
    ) { 
        this.id = Article._id++;
    }
}
export const authors = [
    'Alan Watts',
    'Anthony de Mello',
    'Friedrich Nietzsche',
    'Plato',
    'Immanuel Kant',
    'Ralph Waldo Emerson'
];
// Epoch timestamps in miliseconds
export const dates = [
    1529319540000,
    1529490420000,
    1529419380000
];
export const content = {
    article_0: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia magna ut dolor mattis placerat. Sed consectetur faucibus blandit. Sed fringilla purus quis ante suscipit, et elementum eros malesuada. Quisque suscipit lorem at odio suscipit, id scelerisque massa egestas. Phasellus ut porta odio. Morbi vehicula nisi vitae blandit blandit. Nullam maximus dignissim elit a faucibus. Nulla tempus, elit vitae sodales consequat, libero purus ultricies tellus, vel dignissim est nibh id mi. In urna ante, consequat id mauris in, pharetra faucibus neque. Sed pulvinar luctus magna ut tempor. Suspendisse consectetur varius mollis. Donec sed eros et nisi tristique varius et eget nulla. In nec urna a massa pellentesque sodales in sed massa. Donec vitae lorem posuere, cursus purus id, posuere urna. Pellentesque vitae laoreet ligula. In convallis, sapien ut interdum venenatis, purus eros hendrerit ligula, et porttitor erat mi ultrices risus.",
    
        "Pellentesque fringilla diam a lorem commodo venenatis. Nullam ligula sapien, blandit eu mi eget, dictum rutrum erat. Nunc sagittis ex sed tortor facilisis, eu pellentesque enim ullamcorper. Fusce efficitur diam ac enim blandit hendrerit. Praesent nec sem eu augue hendrerit suscipit. Quisque sit amet mauris mauris. Integer vestibulum quam ut ex hendrerit pharetra. Fusce at bibendum erat, a convallis lacus. Proin tristique, lectus eget interdum dictum, leo mi pellentesque leo, non imperdiet nulla arcu sit amet ligula. Suspendisse ac est maximus, molestie sem in, tempor ex. Nam interdum non urna quis mollis.",

        "Suspendisse vel eros vitae quam pulvinar efficitur luctus in sem. Aliquam vel erat nunc. Sed cursus ultricies odio ac accumsan. Pellentesque tortor turpis, accumsan nec scelerisque in, gravida nec massa. Morbi mauris massa, dapibus at nibh viverra, iaculis tincidunt neque. Etiam elementum porta diam at congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam libero dui, vestibulum nec maximus et, semper ac libero. Donec in mauris id mi aliquam sollicitudin. Duis sem nisl, ullamcorper id auctor vel, vehicula vel justo.",

        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mauris ligula, condimentum et ante mollis, imperdiet gravida lectus. Duis vel justo lobortis libero varius eleifend. In nulla augue, ullamcorper ac blandit vel, lacinia a magna. Maecenas mollis, lectus eget auctor mollis, eros tortor bibendum lectus, et tempor mi sem ac tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus nulla dolor, molestie semper libero pellentesque nec. Vivamus efficitur pharetra ex, ac eleifend nisi mattis id. Pellentesque est felis, rhoncus elementum risus a, consequat placerat libero. Cras lectus libero, rutrum in turpis eget, viverra accumsan elit.",

        "Quisque dictum justo nec dui varius, quis ultrices urna bibendum. Ut sed dictum tortor. Cras et suscipit sem. Phasellus porta leo eget urna placerat interdum vitae a mauris. Nam dictum auctor dui, eget dignissim sem interdum vel. Nam iaculis accumsan commodo. Ut hendrerit varius orci, vel ullamcorper velit placerat id.",

        "Maecenas eros nulla, aliquam vitae pharetra ut, congue suscipit mi. Proin vitae tristique ligula, bibendum rhoncus sem. Vestibulum scelerisque tincidunt eros, et fringilla justo gravida ornare. Sed nec urna elit. Maecenas laoreet egestas leo, ut malesuada elit lobortis vel. Proin tempus mi nec turpis cursus maximus. Nullam non leo pulvinar, pretium dui sed, mattis leo. Donec velit nibh, rhoncus eget ornare eu, feugiat et metus. In hac habitasse platea dictumst.",

        "Nulla convallis posuere nunc vel blandit. Curabitur dictum dictum velit sit amet pulvinar. Donec mollis erat quis maximus molestie. Nunc tincidunt neque purus, nec placerat nibh sagittis ac. Duis dolor massa, commodo in lectus a, semper vehicula elit. Sed sed tellus at mi venenatis pellentesque. Suspendisse potenti. Duis commodo iaculis leo facilisis mollis."
    ],
    article_1: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia magna ut dolor mattis placerat. Sed consectetur faucibus blandit. Sed fringilla purus quis ante suscipit, et elementum eros malesuada. Quisque suscipit lorem at odio suscipit, id scelerisque massa egestas. Phasellus ut porta odio. Morbi vehicula nisi vitae blandit blandit. Nullam maximus dignissim elit a faucibus. Nulla tempus, elit vitae sodales consequat, libero purus ultricies tellus, vel dignissim est nibh id mi. In urna ante, consequat id mauris in, pharetra faucibus neque. Sed pulvinar luctus magna ut tempor. Suspendisse consectetur varius mollis. Donec sed eros et nisi tristique varius et eget nulla. In nec urna a massa pellentesque sodales in sed massa. Donec vitae lorem posuere, cursus purus id, posuere urna. Pellentesque vitae laoreet ligula. In convallis, sapien ut interdum venenatis, purus eros hendrerit ligula, et porttitor erat mi ultrices risus.",
    
        "Pellentesque fringilla diam a lorem commodo venenatis. Nullam ligula sapien, blandit eu mi eget, dictum rutrum erat. Nunc sagittis ex sed tortor facilisis, eu pellentesque enim ullamcorper. Fusce efficitur diam ac enim blandit hendrerit. Praesent nec sem eu augue hendrerit suscipit. Quisque sit amet mauris mauris. Integer vestibulum quam ut ex hendrerit pharetra. Fusce at bibendum erat, a convallis lacus. Proin tristique, lectus eget interdum dictum, leo mi pellentesque leo, non imperdiet nulla arcu sit amet ligula. Suspendisse ac est maximus, molestie sem in, tempor ex. Nam interdum non urna quis mollis.",

        "Suspendisse vel eros vitae quam pulvinar efficitur luctus in sem. Aliquam vel erat nunc. Sed cursus ultricies odio ac accumsan. Pellentesque tortor turpis, accumsan nec scelerisque in, gravida nec massa. Morbi mauris massa, dapibus at nibh viverra, iaculis tincidunt neque. Etiam elementum porta diam at congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam libero dui, vestibulum nec maximus et, semper ac libero. Donec in mauris id mi aliquam sollicitudin. Duis sem nisl, ullamcorper id auctor vel, vehicula vel justo.",

        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mauris ligula, condimentum et ante mollis, imperdiet gravida lectus. Duis vel justo lobortis libero varius eleifend. In nulla augue, ullamcorper ac blandit vel, lacinia a magna. Maecenas mollis, lectus eget auctor mollis, eros tortor bibendum lectus, et tempor mi sem ac tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus nulla dolor, molestie semper libero pellentesque nec. Vivamus efficitur pharetra ex, ac eleifend nisi mattis id. Pellentesque est felis, rhoncus elementum risus a, consequat placerat libero. Cras lectus libero, rutrum in turpis eget, viverra accumsan elit.",

        "Quisque dictum justo nec dui varius, quis ultrices urna bibendum. Ut sed dictum tortor. Cras et suscipit sem. Phasellus porta leo eget urna placerat interdum vitae a mauris. Nam dictum auctor dui, eget dignissim sem interdum vel. Nam iaculis accumsan commodo. Ut hendrerit varius orci, vel ullamcorper velit placerat id.",

        "Maecenas eros nulla, aliquam vitae pharetra ut, congue suscipit mi. Proin vitae tristique ligula, bibendum rhoncus sem. Vestibulum scelerisque tincidunt eros, et fringilla justo gravida ornare. Sed nec urna elit. Maecenas laoreet egestas leo, ut malesuada elit lobortis vel. Proin tempus mi nec turpis cursus maximus. Nullam non leo pulvinar, pretium dui sed, mattis leo. Donec velit nibh, rhoncus eget ornare eu, feugiat et metus. In hac habitasse platea dictumst.",

        "Nulla convallis posuere nunc vel blandit. Curabitur dictum dictum velit sit amet pulvinar. Donec mollis erat quis maximus molestie. Nunc tincidunt neque purus, nec placerat nibh sagittis ac. Duis dolor massa, commodo in lectus a, semper vehicula elit. Sed sed tellus at mi venenatis pellentesque. Suspendisse potenti. Duis commodo iaculis leo facilisis mollis."
    ],
    article_2: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia magna ut dolor mattis placerat. Sed consectetur faucibus blandit. Sed fringilla purus quis ante suscipit, et elementum eros malesuada. Quisque suscipit lorem at odio suscipit, id scelerisque massa egestas. Phasellus ut porta odio. Morbi vehicula nisi vitae blandit blandit. Nullam maximus dignissim elit a faucibus. Nulla tempus, elit vitae sodales consequat, libero purus ultricies tellus, vel dignissim est nibh id mi. In urna ante, consequat id mauris in, pharetra faucibus neque. Sed pulvinar luctus magna ut tempor. Suspendisse consectetur varius mollis. Donec sed eros et nisi tristique varius et eget nulla. In nec urna a massa pellentesque sodales in sed massa. Donec vitae lorem posuere, cursus purus id, posuere urna. Pellentesque vitae laoreet ligula. In convallis, sapien ut interdum venenatis, purus eros hendrerit ligula, et porttitor erat mi ultrices risus.",
    
        "Pellentesque fringilla diam a lorem commodo venenatis. Nullam ligula sapien, blandit eu mi eget, dictum rutrum erat. Nunc sagittis ex sed tortor facilisis, eu pellentesque enim ullamcorper. Fusce efficitur diam ac enim blandit hendrerit. Praesent nec sem eu augue hendrerit suscipit. Quisque sit amet mauris mauris. Integer vestibulum quam ut ex hendrerit pharetra. Fusce at bibendum erat, a convallis lacus. Proin tristique, lectus eget interdum dictum, leo mi pellentesque leo, non imperdiet nulla arcu sit amet ligula. Suspendisse ac est maximus, molestie sem in, tempor ex. Nam interdum non urna quis mollis.",

        "Suspendisse vel eros vitae quam pulvinar efficitur luctus in sem. Aliquam vel erat nunc. Sed cursus ultricies odio ac accumsan. Pellentesque tortor turpis, accumsan nec scelerisque in, gravida nec massa. Morbi mauris massa, dapibus at nibh viverra, iaculis tincidunt neque. Etiam elementum porta diam at congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam libero dui, vestibulum nec maximus et, semper ac libero. Donec in mauris id mi aliquam sollicitudin. Duis sem nisl, ullamcorper id auctor vel, vehicula vel justo.",

        "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas mauris ligula, condimentum et ante mollis, imperdiet gravida lectus. Duis vel justo lobortis libero varius eleifend. In nulla augue, ullamcorper ac blandit vel, lacinia a magna. Maecenas mollis, lectus eget auctor mollis, eros tortor bibendum lectus, et tempor mi sem ac tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse dapibus nulla dolor, molestie semper libero pellentesque nec. Vivamus efficitur pharetra ex, ac eleifend nisi mattis id. Pellentesque est felis, rhoncus elementum risus a, consequat placerat libero. Cras lectus libero, rutrum in turpis eget, viverra accumsan elit.",

        "Quisque dictum justo nec dui varius, quis ultrices urna bibendum. Ut sed dictum tortor. Cras et suscipit sem. Phasellus porta leo eget urna placerat interdum vitae a mauris. Nam dictum auctor dui, eget dignissim sem interdum vel. Nam iaculis accumsan commodo. Ut hendrerit varius orci, vel ullamcorper velit placerat id.",

        "Maecenas eros nulla, aliquam vitae pharetra ut, congue suscipit mi. Proin vitae tristique ligula, bibendum rhoncus sem. Vestibulum scelerisque tincidunt eros, et fringilla justo gravida ornare. Sed nec urna elit. Maecenas laoreet egestas leo, ut malesuada elit lobortis vel. Proin tempus mi nec turpis cursus maximus. Nullam non leo pulvinar, pretium dui sed, mattis leo. Donec velit nibh, rhoncus eget ornare eu, feugiat et metus. In hac habitasse platea dictumst.",

        "Nulla convallis posuere nunc vel blandit. Curabitur dictum dictum velit sit amet pulvinar. Donec mollis erat quis maximus molestie. Nunc tincidunt neque purus, nec placerat nibh sagittis ac. Duis dolor massa, commodo in lectus a, semper vehicula elit. Sed sed tellus at mi venenatis pellentesque. Suspendisse potenti. Duis commodo iaculis leo facilisis mollis."
    ],

}
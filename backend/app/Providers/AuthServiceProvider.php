<?php

namespace App\Providers;

use App\Models\Event;
use App\Models\Scenery;
use App\Models\User;
use App\Policies\EventPolicy;
use App\Policies\SceneryPolicy;
use App\Policies\SlotPolicy;
use App\Services\JwtService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Boot the authentication services for the application.
     *
     * @return void
     */
    public function boot()
    {
        // Here you may define how you wish users to be authenticated for your Lumen
        // application. The callback which receives the incoming request instance
        // should return either a User instance or null. You're free to obtain
        // the User instance via an API token or any other method necessary.

        Gate::policy(Event::class, EventPolicy::class);
        Gate::policy(Slot::class, SlotPolicy::class);
        Gate::policy(Scenery::class, SceneryPolicy::class);

        $this->app['auth']->viaRequest('api', function ($request) {
            if ($request->header('Authorization')) {
                $token = explode(' ', $request->header('Authorization'));
                $data = JwtService::decode($token[1]);
                $userId = $data->sub->id;
                $vid = $data->sub->vid;

                $user = Cache::get($userId);

                if ($user) {
                    return $user;
                }

                $user = User::where('id', $userId)
                    ->where('vid', $vid)
                    ->first();

                Cache::put($userId, $user, 5 * 60);

                return $user;
            }
        });
    }
}

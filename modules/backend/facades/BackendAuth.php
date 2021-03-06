<?php namespace Backend\Facades;

use October\Rain\Support\Facade;

class BackendAuth extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @see \Backend\Classes\AuthManager
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'backend.auth';
    }
}
